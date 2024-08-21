# Build stage
FROM node:18-alpine AS builder


# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including Prisma CLI
RUN npm ci

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Set environment variables
ENV NODE_ENV production

# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port Next.js runs on
EXPOSE 3000

# Add health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => res.statusCode === 200 ? process.exit(0) : process.exit(1))"

# Run the app
CMD ["npm", "start"]
'use client'

import { useParams } from 'next/navigation'
import { Card, Modal, Button, ModalHeader, ModalBody, CardBody, ModalFooter } from "@nextui-org/react"

export default function ProductModal() {
  const params = useParams()
  return (
    <Modal isOpen={false} onClose={() => window.history.back()}>
      <ModalHeader>
        <h3>Product Details</h3>
      </ModalHeader>
      <ModalBody>
        <Card>
          <CardBody>
            <h6>Product ID: {params.id}</h6>
            {/* Fetch and display product details here */}
          </CardBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        <Button color="warning" onClick={() => window.history.back()}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}
'use client'

import { Layout, Text, Page, Button } from '@vercel/examples-ui'
import { useRouter } from 'next/navigation'

function Maintenance() {
  const router = useRouter()

  return (
    <Page className="flex flex-col gap-12 p-8">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Under Maintenance</Text>
        <Text>
          You can try to refresh the page to see if the issue is resolved.
        </Text>
        <Button onClick={router.refresh}>Refresh</Button>
      </section>
    </Page>
  )
}

export default Maintenance

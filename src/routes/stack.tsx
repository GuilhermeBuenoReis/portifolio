import { createFileRoute } from '@tanstack/react-router'
import { StackPage } from '#/pages/stack'

export const Route = createFileRoute('/stack')({
  component: StackPage,
})

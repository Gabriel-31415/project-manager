'use client';

import { useFormStatus } from "react-dom";
import Button from './button'

export default function ProjectSubmitForm() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} classes="bg-stone-900 text-stone-50 hover:">
      {pending ? 'Saving...' : 'Save'}
    </Button>
  );
}
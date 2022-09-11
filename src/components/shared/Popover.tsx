import { Popover } from '@headlessui/react'
import { Props } from '@headlessui/react/dist/types'
import { trpc } from '../../utils/trpc'

export function Form() {

  const addYourEventMutation = trpc.useMutation(["yourEvent.add",])

  function addYourEvent(event){

    const yourEvent = {
      organizer: event.target.organizer.value,
      date: event.target.date.value,
      place: event.target.place.value,
      description: event.target.description.value
    }
    addYourEventMutation.mutate({...yourEvent})
    

  }

return (
  <form onSubmit={addYourEvent}>
    <label>Nazwa wydarzenia</label>
    <input type="text" name="organizer" required />

    <label>Data</label>
    <input type="text" name="date" required />

    <label>Miejsce</label>
    <input type="text" name="place" required />
  <p>Kategoria</p>
    <select name="category" id=""> 
      <option>Koncert</option>
      <option>Sport</option>
      <option>Warsztaty</option>
      <option>Edukacja</option>
      <option>Inne</option>
    </select>
  <p></p>
    <label>Opis</label>
    <input type="text" name="description" required />

    <button type="submit">Submit</button>
  </form>
)
}

export type PopoverProps = {
  title: string,

}

export default function MyPopover({title}: PopoverProps) {


  return (
    <Popover className="relative">
      <Popover.Button>{title}</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col bg-danger-rgb">
          <Form/>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}
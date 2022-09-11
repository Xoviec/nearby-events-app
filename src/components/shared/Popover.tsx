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
      description: event.target.description.value,
      category: event.target.category.value
    }
    addYourEventMutation.mutate({...yourEvent})
    

  }

  return (
    <form className='max-w-xs flex flex-col items-center' onSubmit={addYourEvent}>
        <label className='px-1'>Nazwa wydarzenia</label>
        <input type="text" name="organizer" className="text-black bg-[#f0b859] shadow-md w-32" required />

        <label className='px-1'>Data</label>
        <input type="text" name="date" className="text-black bg-[#f0b859] shadow-md  w-32 " required />

        <label className='px-1'>Miejsce</label>
        <input type="text" name="place" className="text-black bg-[#f0b859] shadow-md  w-32" required />
        <p className='px-1'>Kategoria</p>
        <select name="category" id="" className="text-black bg-[#f0b859] shadow-md  w-32">
          <option className="text-black">Koncert</option>
          <option className="text-black">Sport</option>
          <option className="text-black">Warsztaty</option>
          <option className="text-black">Edukacja</option>
          <option className="text-black">Inne</option>
        </select>
        <p></p>
        <label className='px-1'>Opis</label>
        <input type="text" name="description" className="text-black bg-[#f0b859] shadow-md  w-32" required />

        <button type="submit" className='px-1 w-[100%] mt-2 hover:bg-danger-rgb hover:text-gray-100 hover:shadow-md'>Submit</button>
    </form>
  );
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
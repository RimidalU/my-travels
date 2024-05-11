import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { EventListItem } from './event-list-item'
import { eventsTypes } from '../model/types'

const testItem = {
  id: 'id',
  description: 'description',
  name: 'name',
  type: eventsTypes[0],
}

describe('course item', () => {
  it('should call delete callback', async () => {
    const onDelete = jest.fn()
    render(<EventListItem event={testItem} onDelete={onDelete} />)

    await userEvent.click(screen.getByText('Remove'))

    expect(onDelete).toHaveBeenCalled()
  })
})

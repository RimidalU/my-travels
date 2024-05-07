import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('page', () => {
  it('the page should be displayed', async () => {
    render(<Home />)

    await expect(
      screen.getByText(
        'Find in-depth information about Next.js features and API.',
      ),
    ).toBeInTheDocument()
  })
})

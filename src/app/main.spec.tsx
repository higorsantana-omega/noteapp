import { render, screen } from '@testing-library/react'

import { Main } from './Main'

describe('<Main />', () => {
  it('should render', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /next/i })).toBeInTheDocument()
  })
})

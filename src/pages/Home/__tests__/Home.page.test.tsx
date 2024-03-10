import { render, screen, userEvent } from '@test-utils';
import { HomePage } from '../Home.page';

describe('Home Page Tests', () => {
  it('should render HomePage', () => {
    // arrange

    // act
    render(<HomePage />);

    // assert
    const element = screen.getByText('No Users Found');
    expect(element).toBeInTheDocument();
  });

  it('should load Users data on Button click', async () => {
    render(<HomePage />);
    await userEvent.click(screen.getByRole('button', { name: 'Load Users' }));
    expect(screen.getByText('test@gmail.com')).toBeDefined();
  });
});

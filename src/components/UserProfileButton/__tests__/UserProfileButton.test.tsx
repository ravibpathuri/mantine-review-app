import { render, screen, userEvent } from '@test-utils';
import { vi } from 'vitest';
import { Anchor } from '@mantine/core';

import UserProfileButton from '../UserProfileButton';

describe('UserProfileButton Tests', () => {
  it('should render UserProfileButton component', () => {
    // arrange
    const TestData = { name: 'John D', email: 'fake@email.com', image: '#' };

    // act
    render(
      <UserProfileButton name={TestData.name} email={TestData.email} image={TestData.image} />
    );

    // assert
    const element = screen.getByText(TestData.name);
    expect(element).toBeInTheDocument();
  });

  it('should handle LogOff event on Button click', async () => {
    // arrange
    const TestData = { name: 'John D', email: 'fake@email.com', image: '#' };
    const handleSignOff = vi.fn();
    const signOffIcon = (
      <Anchor role="button" component="a" onClick={handleSignOff}>
        SignOff
      </Anchor>
    );

    // act
    render(
      <UserProfileButton
        name={TestData.name}
        email={TestData.email}
        image={TestData.image}
        signOffIcon={signOffIcon}
      />
    );

    // assert
    await userEvent.click(screen.getByRole('button', { name: 'SignOff' }));
    expect(handleSignOff).toBeCalled();
  });
});

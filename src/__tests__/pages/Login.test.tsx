import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouteTest, ThemeTest } from '../shared/logics';

import FormSign from '../../components/form/FormSign';

test('Deve apresentar campos de texto de entrada para e-mail e senha', () => {
  //Arrange
  render(
    <ThemeTest>
      <RouteTest>
        <FormSign />
      </RouteTest>
    </ThemeTest>
  );

  // Act

  //Assert
  expect(screen.getByTestId('email')).toHaveLength(1);
  expect(screen.getByTestId('password')).toHaveLength(1);
});

test('Deve apresentar o botão quando o login renderiza', () => {
  //Arrange
  render(
    <ThemeTest>
      <RouteTest>
        <FormSign />
      </RouteTest>
    </ThemeTest>
  );

  //Assert
  expect(screen.getByTestId('acessar')).toHaveLength(1);
});

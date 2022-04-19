/**
 * Module dependencies.
 */

import { Error, Field, FormField, Label } from './styles';
import { Text, textStyles } from 'src/components/core/text';
import styled from 'styled-components';

/**
 * `Suffix` styled component.
 */

const Suffix = styled(Text).attrs({
  noMargin: true,
  variant: 'body2'
})`
  grid-area: suffix;
  position: relative;
  top: 6px;
`;

/**
 * `Input` styled component.
 */

const Input = styled.input`
  ${textStyles.body2}

  background: none;
  border: none;
  color: var(--color-white);
  grid-area: input;
  height: 3rem;
  margin: 0;
  padding-right: 1rem;
  width: 100%;

  ::placeholder {
    color: var(--color-white);
  }

  :focus {
    outline: none;
  }
`;

/**
 * `InputField` component.
 */

export function InputField(props: any) {
  const { error, label, suffix, ...inputProps } = props;

  return (
    <FormField disabled={inputProps.disabled}>
      {label && <Label>{label}</Label>}

      <Field hasError={!!error}>
        <Input {...inputProps} />
        {suffix && <Suffix>{suffix}</Suffix>}
      </Field>

      {error && <Error>{error}</Error>}
    </FormField>
  );
}

import React from "react";
import {
  TextInput as RaTextInput,
  BooleanInput as RaBooleanInput,
  NullableBooleanInput as RaNullableBooleanInput,
  DateInput as RaDateInput,
  DateTimeInput as RaDateTimeInput,
  ImageInput as RaImageInput,
  FileInput as RaFileInput,
  NumberInput as RaNumberInput,
  PasswordInput as RaPasswordInput,
  AutocompleteInput as RaAutocompleteInput,
  RadioButtonGroupInput as RaRadioButtonGroupInput,
  SelectInput as RaSelectInput,
  ArrayInput as RaArrayInput,
  AutocompleteArrayInput as RaAutocompleteArrayInput,
  CheckboxGroupInput as RaCheckboxGroupInput,
  SelectArrayInput as RaSelectArrayInput,
  ReferenceArrayInput as RaReferenceArrayInput,
  ReferenceInput as RaReferenceInput,
} from "react-admin";

import { RbacInput } from "./rbac-input";
import { ComponentProps } from "../../types";

export const TextInput: React.FC<ComponentProps<typeof RaTextInput>> = (
  props
) => <RbacInput {...props} component={RaTextInput} />;

export const BooleanInput: React.FC<ComponentProps<typeof RaBooleanInput>> = (
  props
) => <RbacInput {...props} component={RaBooleanInput} />;

export const NullableBooleanInput: React.FC<
  ComponentProps<typeof RaNullableBooleanInput>
> = (props) => <RbacInput {...props} component={RaNullableBooleanInput} />;

export const DateInput: React.FC<ComponentProps<typeof RaDateInput>> = (
  props
) => <RbacInput {...props} component={RaDateInput} />;

export const DateTimeInput: React.FC<ComponentProps<typeof RaDateTimeInput>> = (
  props
) => <RbacInput {...props} component={RaDateTimeInput} />;

export const ImageInput: React.FC<ComponentProps<typeof RaImageInput>> = (
  props
) => <RbacInput {...props} component={RaImageInput} />;

export const FileInput: React.FC<ComponentProps<typeof RaFileInput>> = (
  props
) => <RbacInput {...props} component={RaFileInput} />;

export const NumberInput: React.FC<ComponentProps<typeof RaNumberInput>> = (
  props
) => <RbacInput {...props} component={RaNumberInput} />;

export const PasswordInput: React.FC<ComponentProps<typeof RaPasswordInput>> = (
  props
) => <RbacInput {...props} component={RaPasswordInput} />;

export const AutocompleteInput: React.FC<
  ComponentProps<typeof RaAutocompleteInput>
> = (props) => <RbacInput {...props} component={RaAutocompleteInput} />;

export const RadioButtonGroupInput: React.FC<
  ComponentProps<typeof RaRadioButtonGroupInput>
> = (props) => <RbacInput {...props} component={RaRadioButtonGroupInput} />;

export const SelectInput: React.FC<ComponentProps<typeof RaSelectInput>> = (
  props
) => <RbacInput {...props} component={RaSelectInput} />;

export const ArrayInput: React.FC<ComponentProps<typeof RaArrayInput>> = (
  props
) => <RbacInput {...props} component={RaArrayInput} />;

export const AutocompleteArrayInput: React.FC<
  ComponentProps<typeof RaAutocompleteArrayInput>
> = (props) => <RbacInput {...props} component={RaAutocompleteArrayInput} />;

export const CheckboxGroupInput: React.FC<
  ComponentProps<typeof RaCheckboxGroupInput>
> = (props) => <RbacInput {...props} component={RaCheckboxGroupInput} />;

export const SelectArrayInput: React.FC<
  ComponentProps<typeof RaSelectArrayInput>
> = (props) => <RbacInput {...props} component={RaSelectArrayInput} />;

export const ReferenceArrayInput: React.FC<
  ComponentProps<typeof RaReferenceArrayInput>
> = (props) => <RbacInput {...props} component={RaReferenceArrayInput} />;

export const ReferenceInput: React.FC<
  ComponentProps<typeof RaReferenceInput>
> = (props) => <RbacInput {...props} component={RaReferenceInput} />;

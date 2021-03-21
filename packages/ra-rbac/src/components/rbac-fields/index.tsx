import React from "react";
import {
  BooleanField as RaBooleanFiled,
  ChipField as RaChipField,
  DateField as RaDateField,
  EmailField as RaEmailField,
  ImageField as RaImageField,
  FileField as RaFileField,
  NumberField as RaNumberField,
  RichTextField as RaRichTextField,
  TextField as RaTextField,
  UrlField as RaUrlField,
  SelectField as RaSelectField,
  ArrayField as RaArrayField,
  ReferenceField as RaReferenceField,
  ReferenceManyField as RaReferenceManyField,
  ReferenceArrayField as RaReferenceArrayField,
} from "react-admin";

import { RbacField } from "./rbac-field";
import { ComponentProps } from "../../types";

export const BooleanField: React.FC<ComponentProps<typeof RaBooleanFiled>> = (
  props
) => <RbacField {...props} component={RaBooleanFiled} />;

export const ChipField: React.FC<ComponentProps<typeof RaChipField>> = (
  props
) => <RbacField {...props} component={RaChipField} />;

export const DateField: React.FC<ComponentProps<typeof RaDateField>> = (
  props
) => <RbacField {...props} component={RaDateField} />;

export const EmailField: React.FC<ComponentProps<typeof RaEmailField>> = (
  props
) => <RbacField {...props} component={RaEmailField} />;

export const ImageField: React.FC<ComponentProps<typeof RaImageField>> = (
  props
) => <RbacField {...props} component={RaImageField} />;

export const FileField: React.FC<ComponentProps<typeof RaFileField>> = (
  props
) => <RbacField {...props} component={RaFileField} />;

export const NumberField: React.FC<ComponentProps<typeof RaNumberField>> = (
  props
) => <RbacField {...props} component={RaNumberField} />;

export const RichTextField: React.FC<ComponentProps<typeof RaRichTextField>> = (
  props
) => <RbacField {...props} component={RaRichTextField} />;

export const TextField: React.FC<ComponentProps<typeof RaTextField>> = (
  props
) => <RbacField {...props} component={RaTextField} />;

export const UrlField: React.FC<ComponentProps<typeof RaUrlField>> = (
  props
) => <RbacField {...props} component={RaUrlField} />;

export const SelectField: React.FC<ComponentProps<typeof RaSelectField>> = (
  props
) => <RbacField {...props} component={RaSelectField} />;

export const ArrayField: React.FC<ComponentProps<typeof RaArrayField>> = (
  props
) => <RbacField {...props} component={RaArrayField} />;

export const ReferenceField: React.FC<
  ComponentProps<typeof RaReferenceField>
> = (props) => <RbacField {...props} component={RaReferenceField} />;

export const ReferenceManyField: React.FC<
  ComponentProps<typeof RaReferenceField>
> = (props) => <RbacField {...props} component={RaReferenceManyField} />;

export const ReferenceArrayField: React.FC<
  ComponentProps<typeof RaReferenceArrayField>
> = (props) => <RbacField {...props} component={RaReferenceArrayField} />;

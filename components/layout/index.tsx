import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export default function Layout(props: Props) {
  return props.children;
}

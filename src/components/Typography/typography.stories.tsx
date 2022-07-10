import React from 'react';
import Typography from './index'
import { TextProps } from './Text'
import { TitleProps } from './Title'

const { Title, Text } = Typography

export default {
  title: '通用/Typography',
  component: Typography,
};

const titleTpl = (args: TitleProps) => {
  let { level } = args
  return (
    <>
      <Title level={level}>h{level}. Speed UI</Title>
      <Title level={2}>h2. Speed UI</Title>
      <Title level={3}>h3. Speed UI</Title>
      <Title level={4}>h4. Speed UI</Title>
      <Title level={5}>h5. Speed UI</Title>
      <Title level={6}>h6. Speed UI</Title>
    </>
  )
}

export const titleTypography: any = titleTpl.bind({});
titleTypography.args = {
  level: 1
}


const textTpl = (args: TextProps) => {
  let { type } = args
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text type={type}>Speed UI</Text>
        <Text type={'danger'}>Speed UI</Text>
        <Text type={'success'}>Speed UI</Text>
        <Text type={'secondary'}>Speed UI</Text>
        <Text type={'warning'}>Speed UI</Text>
        <Text disabled>Speed UI</Text>
        <Text keyboard>Speed UI</Text>
        <Text code>Speed UI</Text>
        <Text mark>Speed UI</Text>
        <Text underline>Speed UI</Text>
        <Text strong>Speed UI</Text>
        <Text italic>Speed UI</Text>
        <Text href='https://ant.design' target="_blank">Speed UI Link</Text>
      </div>
    </>
  )
}

export const textTypography: any = textTpl.bind({});
textTypography.argTypes = {
  type: {
    options: ['default', 'secondary', 'success', 'danger', 'warning'],
    control: { type: 'radio' },
  },
}

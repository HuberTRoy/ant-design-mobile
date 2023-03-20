import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-spin-loading'

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export type SpinLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
} & NativeProps<'--color' | '--size'>

const defaultProps = {
  color: 'default',
}

const circumference = 15 * 3.14159265358979 * 2

export const SpinLoading = memo<SpinLoadingProps>(p => {
  const props = mergeProps(defaultProps, p)

  return withNativeProps(
    props,
    <div
      className={classPrefix}
      style={
        {
          '--color': colorRecord[props.color] ?? props.color,
        } as any
      }
    >
      <svg className={`${classPrefix}-svg`} viewBox='0 0 32 32'>
        <circle
          className={`${classPrefix}-fill`}
          fill='transparent'
          strokeWidth='2'
          strokeDasharray={circumference}
          strokeDashoffset={80}
          strokeLinecap='square'
          r={15}
          cx={16}
          cy={16}
        >
          <animate
            attributeName='stroke-dashoffset'
            values='80;30;80'
            dur='2.4s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
})

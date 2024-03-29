import HideEye from '06_shared/assets/icons/closed_eye.svg'
import Eye from '06_shared/assets/icons/eye.svg'
import { classNames } from '06_shared/lib/classNames/classNames'
import { Icon } from '06_shared/ui/Icon/Icon'
import type { IconTheme } from '06_shared/ui/Icon/model/icon'


interface EyeIconProps {
  className?: string
  theme?: IconTheme
  size?: number
  hide?: boolean
}

export const EyeIcon = (props: EyeIconProps) => {
  const {
    className,
    theme,
    size,
    hide = false,
  } = props
  return (
    <Icon
      Svg={!hide ? Eye : HideEye}
      theme={theme}
      size={size}
      className={classNames('', [className])}
    />
  )
}

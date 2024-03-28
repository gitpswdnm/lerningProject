import { getAllUsers } from '04_features/AdminChangingPanelData/model/service/getAllUsers'
import { selectUsersData } from '04_features/AdminChangingPanelData/model/slice/adminDataSlice'
import { classNames } from '06_shared/lib/classNames/classNames'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks/StoreHooks'
import { Text } from '06_shared/ui/Text/Text'
import { memo, useEffect } from 'react'
import cls from './ChangingUsersDataForm.module.css'


interface ChangingUsersDataFormProps {
  className?: string

}

export const ChangingUsersDataForm = memo((props: ChangingUsersDataFormProps) => {
  const {
    className
  } = props
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsersData)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  return (
    <ul className={classNames(cls.users, [className])}>
      <li className={cls.user}>
        <Text text='id' />
        <Text text='email' />
        <Text text='role' />
      </li>
      {users?.map((user) => (
        <li className={cls.user} key={user.id}>
          <Text text={String(user.id)} />
          <Text text={user.email} />
          <Text text={String(user.role)} />
        </li>
      ))}
    </ul>
  )
})

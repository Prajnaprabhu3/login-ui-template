import { Input, Spacer } from "@nextui-org/react";
import { UnLockIcon } from "./UnLockIcon.tsx";
import { LockIcon } from "./LockIcon.tsx";
import style from '../../styles/Password.module.scss'

export default function Password() {
  return (
    <div className="flex mt-10 justify-center items-center">
      <Input.Password  className={`${style.password}`} labelPlaceholder="Password" initialValue="" />
      <Spacer y={1.6} />
      </div>
  );
}


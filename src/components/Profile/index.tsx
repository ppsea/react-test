import React from "react";

type Props = {
  userName: string;
  name: string;
};
export default function Profile({ userName, name }: Props) {
  return (
    <div>
      <b>{userName}</b>
      <br />
      <span>{name}</span>
    </div>
  );
}

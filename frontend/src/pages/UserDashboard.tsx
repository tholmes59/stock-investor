import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";

export default function UserDashboard() {
  const { user, isLoading, isSuccess, isError, message } = useAppSelector(
    (state) => state.auth
  );

  const { userID } = useParams<{ userID: string }>();
  const dispatch = useAppDispatch();

  interface User {
    _id: string;
    name: string;
    email: string;
    token: string;
  }

  console.log(user);

  return (
    <div>
      <h1>{user && (user as User).name} Portfolio</h1>
    </div>
  );
}

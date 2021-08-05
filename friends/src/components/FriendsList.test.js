import { render, screen } from "@testing-library/react";
import FriendsList from "./FriendsList";

test("Component renders without errors", () => {
  render(<FriendsList />);
});

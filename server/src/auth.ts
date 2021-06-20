import { sign } from "jsonwebtoken";
import { User } from "./entity/User";

export function createRefreshToken(user: User) {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKKEN_SECRET!,
    {
      expiresIn: "7d",
    }
  );
}

export function createAccessToken(user: User) {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });
}

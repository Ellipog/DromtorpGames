import { test, expect } from "@playwright/test";
import axios from "axios";

test("test axios get request", async () => {
  const response = await axios.get("http://localhost:25584/fetchScores");
  expect(response.status).toBe(200);
});

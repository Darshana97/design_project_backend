import { Router } from "express";

import { check, validationResult } from "express-validator";

const router = Router;

const authValidator = [
  check("email", "Enter the valid email address").isEmail(),
  check("password", "Password must be at least 6 character").isLength({
    min: 6,
  }),
];

//Login
router.post("/login", authValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

//Register
router.post("/register", authValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

export default router;

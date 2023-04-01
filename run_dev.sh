#!/bin/sh

concurrently \
  "cd web && npm run dev -- --port 3000" \
  "FLASK_APP=server/server.py FLASK_ENV=development flask run --port 5000"

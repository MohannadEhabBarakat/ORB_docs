#!/bin/bash

SESSION_NAME="orb_dev"

# Check if session exists
if tmux has-session -t $SESSION_NAME 2>/dev/null; then
    echo "Session $SESSION_NAME already exists."
    echo "Attach to it using: tmux attach -t $SESSION_NAME"
    echo "Or kill it using: tmux kill-session -t $SESSION_NAME"
    exit 1
fi

# Create a new detached session
tmux new-session -d -s $SESSION_NAME -n "backend"

echo "========================================="
echo "Setting up Backend..."
echo "========================================="
# Clone if it doesn't exist
if [ ! -d "orb_backend" ]; then
  git clone https://github.com/MohannadEhabBarakat/orb_backend.git
fi
cd orb_backend
docker compose up -d
cd ..
tmux send-keys -t $SESSION_NAME:backend "cd orb_backend && uv run uvicorn app.main:app --reload" C-m

echo "========================================="
echo "Setting up Annotation Tool..."
echo "========================================="
if [ ! -d "ORB-frontend" ]; then
  git clone https://github.com/MohannadEhabBarakat/ORB-frontend.git
fi
cd ORB-frontend
npm install
cd ..
tmux new-window -t $SESSION_NAME -n "annotation"
tmux send-keys -t $SESSION_NAME:annotation "cd ORB-frontend && npm run dev" C-m

echo "========================================="
echo "Setting up Admin Dashboard..."
echo "========================================="
if [ ! -d "orb_FE" ]; then
  git clone https://github.com/MohannadEhabBarakat/orb_FE.git
fi
cd orb_FE
npm install
cd ..
tmux new-window -t $SESSION_NAME -n "dashboard"
tmux send-keys -t $SESSION_NAME:dashboard "cd orb_FE && npm run dev" C-m

echo "========================================="
echo "Setting up Analysis Backend..."
echo "========================================="
if [ ! -d "orb_analysis" ]; then
  git clone https://github.com/MohannadEhabBarakat/orb_analysis.git
fi
tmux new-window -t $SESSION_NAME -n "analysis"
tmux send-keys -t $SESSION_NAME:analysis "cd orb_analysis && uv run app.py" C-m

echo "========================================="
echo "All services are starting up in tmux!"
echo "To view the logs and interact, attach to the session:"
echo "    tmux attach -t $SESSION_NAME"
echo ""
echo "To stop all services, kill the session:"
echo "    tmux kill-session -t $SESSION_NAME"
echo "========================================="

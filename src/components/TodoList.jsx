import { IconButton, List, ListItem, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import useTodoList from '../hooks/useTodoList'

function TodoList() {
  const { tasks, draft, setDraft, addTask, removeTask, canSubmit } = useTodoList()

  return (
    <Paper className="panel" elevation={0}>
      <Stack spacing={2.5}>
        <div>
          <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
            ToDo List
          </Typography>
          <Typography color="text.secondary">
            Plan, add, and remove tasks with local persistence.
          </Typography>
        </div>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <TextField
            fullWidth
            value={draft}
            label="New task"
            placeholder="e.g., Review hooks lesson notes"
            inputProps={{ maxLength: 80 }}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                addTask()
              }
            }}
          />
          <IconButton
            color="primary"
            sx={{
              alignSelf: { xs: 'flex-start', sm: 'center' },
              borderRadius: 3,
              border: '1px solid rgba(31, 111, 120, 0.2)',
            }}
            onClick={addTask}
            disabled={!canSubmit}
            aria-label="Add task"
          >
            <AddCircleOutlinedIcon />
          </IconButton>
        </Stack>
        {tasks.length === 0 ? (
          <Typography color="text.secondary">
            No tasks yet. Add your first activity.
          </Typography>
        ) : (
          <List disablePadding>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                divider
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label={`Delete ${task.title}`}
                    onClick={() => removeTask(task.id)}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={task.title}
                  secondary={task.createdAtLabel}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Stack>
    </Paper>
  )
}

export default TodoList
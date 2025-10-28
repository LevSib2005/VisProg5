'use client';

import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowSelectionModel, GridRowId } from '@mui/x-data-grid';
import { Chip, Switch, Box } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
  status: boolean;
}

const initialRows: User[] = [
  { id: 1, name: 'Pavel ZolodoV', email: 'rbebi1984@mail.ru', roles: ['Admin', 'Editor'], status: true },
  { id: 2, name: 'Лера Сынгит', email: '1488@egmail.com', roles: ['User'], status: false },
  { id: 3, name: 'Херанука Пороялю', email: 'ZaLubsky@ya.com', roles: ['Editor'], status: true },
  { id: 4, name: 'Mlkv52', email: 'music1950@gmail.com', roles: ['User', 'Viewer'], status: true },
];

const columns: GridColDef<User>[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 80, 
    type: 'number',
    headerAlign: 'center',
    align: 'center'
  },
  { 
    field: 'name', 
    headerName: 'Имя', 
    width: 150, 
    type: 'string',
    headerClassName: 'header-cell'
  },
  { 
    field: 'email', 
    headerName: 'Email', 
    width: 220, 
    type: 'string',
    headerClassName: 'header-cell'
  },
  {
    field: 'roles',
    headerName: 'Роли',
    width: 250,
    headerClassName: 'header-cell',
    renderCell: (params: GridRenderCellParams<User, string[]>) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {params.value?.map((role, index) => (
          <Chip
            key={index}
            label={role}
            color={role === 'Admin' ? 'error' : role === 'Editor' ? 'primary' : 'default'}
            size="small"
            variant="outlined"
          />
        ))}
      </Box>
    ),
  },
  {
    field: 'status',
    headerName: 'Статус',
    width: 120,
    type: 'boolean',
    headerClassName: 'header-cell',
    renderCell: (params: GridRenderCellParams<User, boolean>) => (
      <Switch
        checked={params.value ?? false}
        onChange={(event) => {
          params.api.updateRows([{ id: params.row.id, status: event.target.checked }]);
        }}
        size="small"
        color={params.value ? 'success' : 'default'}
      />
    ),
  },
];

const UserTable: React.FC = () => {
  const [rows, setRows] = useState<User[]>(initialRows);
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>({
    type: 'include',
    ids: new Set<GridRowId>(),
  });

  const handleRowSelectionChange = (newModel: GridRowSelectionModel) => {
    setRowSelectionModel(newModel);
    console.log('Выбранные строки:', newModel);
  };

  return (
    <Box sx={{ 
      height: 440, 
      width: '100%',
      '& .header-cell': {
        backgroundColor: 'background.default',
        fontWeight: 600
      },
      '& .MuiDataGrid-cell': {
        borderBottom: '1px solid',
        borderColor: 'divider'
      },
      '& .MuiDataGrid-columnHeaders': {
        borderBottom: '2px solid',
        borderColor: 'divider'
      }
    }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={handleRowSelectionChange}
        disableRowSelectionOnClick
        onRowClick={(params) => {
          console.log('Клик по строке:', params.row);
        }}
        sx={{
          border: 'none',
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'action.hover'
          }
        }}
      />
    </Box>
  );
};

export default UserTable;
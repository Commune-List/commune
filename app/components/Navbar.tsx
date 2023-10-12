import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" className='bg-[#014213]'>
            <Toolbar>
                <Typography variant="h4" className='ml-[100px] text-gray-300'>
                    Commune
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, marginLeft: '24px' }}>
                    <Typography variant="h6" className='text-gray-300 hover:text-green-400 hover:cursor-pointer'>
                        Top Games
                    </Typography>
                    <Typography variant="h6" className='text-gray-300 hover:text-green-400 hover:cursor-pointer'>
                        Popular Games
                    </Typography>
                </Box>
                <form className='flex w-2/5 h-10 ml-16'>
                    <SearchIcon className='text-gray-300' />
                    <input
                        className='w-full h-full pl-4 rounded-md text-slate-700 bg-gray-300 opacity-80 hover:opacity-90 outline-none hover:border-collapse'
                        placeholder="Search..."
                    />
                </form>
                <Box sx={{ display: 'flex', gap: 2, marginLeft: '64px' }}>
                    <Button variant="outlined" className='text-gray-300 border-gray-300 hover:border-green-400 hover:text-green-400 hover:cursor-pointer'>
                        Top Games
                    </Button>
                    <Button variant="contained" className='justify-center text-green-200 hover:text-green-100 bg-green-600 hover:bg-green-500 shadow-md hover:cursor-pointer'>
                        Popular Games
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

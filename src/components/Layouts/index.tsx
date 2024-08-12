// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Box, CssBaseline } from '@mui/material';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import usePageTitle from '@/hooks/usePageTitle';
// import { NAV } from './ConfigLayout';

// const Layout: React.FC = () => {
//   usePageTitle();
//   const [openNav, setOpenNav] = useState(false);

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <Sidebar openNav={openNav} onCloseNav={() => setOpenNav(false)} />
//       <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${NAV.WIDTH}px)` } }}>
//         <Header />
//         <Box>
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Main from './Main';
// import Header from './Header';

import usePageTitle from '@/hooks/usePageTitle';

export default function Layout() {
  usePageTitle();
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Sidebar openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  );
}

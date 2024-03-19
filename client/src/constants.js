export const backEndUrls = {
    'production':'https://money-sharing-server.vercel.app/api/v1/',
    'development': 'http://localhost:3000/api/v1/'
}
export const userRoutes = {
'module':'user',
'endpoint':{
    'UserDetails':'/userDetails',
    'Login':'/login',
    'SignUp':'/signup',
    'Bulk':'/bulk'
}
}

export const accountRoutes = {
    'module':'account',
    'endpoint':{
        'Transfer':'/transfer',
        'Balance':'/balance'
    }
} 
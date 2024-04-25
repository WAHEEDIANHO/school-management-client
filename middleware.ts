export {default} from 'next-auth/middleware';

// export const config = { matcher: ["/transaction", "wallet"] }

export const config = {
    matcher: ['/student', '/teacher', '/parent', '/admin' ],
}
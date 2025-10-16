import { type PropsWithChildren } from 'react';


export default function ApplySimpleLayout({
    children,
}: PropsWithChildren) {
    return <div className="">
        {children}
    </div>;
}

export function whatsMyType<T>(argument: T): T{
    return argument;
}

export function otherTypes<T1,T2>(arg1:T1, arg2:T2):[string, string]{
    return [typeof arg1, typeof arg2];
}
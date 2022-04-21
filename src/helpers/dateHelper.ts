import { addZero } from "../constants/Date"


export const dateService = (arg: any): string => {
    return `${addZero(arg.c.year)}-${addZero(arg.c.month)}-${addZero(arg.c.day)} ${addZero(arg.c.hour)}:${addZero(arg.c.minute)}:00`
}
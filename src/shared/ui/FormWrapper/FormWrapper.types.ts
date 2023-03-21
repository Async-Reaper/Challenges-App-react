import React, {ReactNode} from "react";

export interface IFormProps {
    children: ReactNode;
    method: string;
    onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
}
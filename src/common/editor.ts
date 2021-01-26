export interface EditorRef {
    setOption: (option: string, value: any) => void;
    getOption: (option: string) => any;
    validate: () => boolean;
}
export const getByPath = (item: { [identifier: string]: any }, dataMember: string): any => {
  const path = dataMember?.split('.');

  if (path) {
    let pathSubitem: any = item;

    for (let idx = 0; idx < path.length; idx++) {
      const pathElement = path[idx];

      if (pathSubitem) {
        pathSubitem = pathSubitem[pathElement];
      }
    }

    return pathSubitem;
  }

  return null;
}

export const setByPath = (item: { [identifier: string]: any }, dataMember: string, value: any): void => {
  const path = dataMember?.split('.');

  if (path) {
    let pathSubitem: { [identifier: string]: any } = item;

    for (let idx = 0; idx < path.length - 1; idx++) {
      const pathElement = path[idx];

      if (pathSubitem) {
        if (!pathSubitem[pathElement]) {
          pathSubitem[pathElement] = {};
        }

        pathSubitem = pathSubitem[pathElement];
      }
    }

    pathSubitem[path[path.length - 1]] = value;
  }
}

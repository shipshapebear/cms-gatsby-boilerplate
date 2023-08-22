import path from "path";

exports.createPages = async ({ actions }) => {
  const { createSlice } = actions;

  type SliceType = {
    id: string;
    component: string;
  };

  const slices: SliceType[] = [
    {
      id: `header`,
      component: path.resolve(`./src/components/core/header.tsx`),
    },
    {
      id: `footer`,
      component: path.resolve(`./src/components/core/footer.tsx`),
    },
  ];

  slices.forEach((slice: SliceType) => {
    createSlice({
      id: slice.id,
      component: slice.component,
    });
  });
};

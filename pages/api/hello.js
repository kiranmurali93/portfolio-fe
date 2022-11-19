// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const aboutMe = async () => {
  try {
    const res = await fetch(
      `https://zg7l7l8s.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'abouts'%5D%20`,
    );
    const data = await res.json();
    return data.result[0];
  } catch (error) {
    console.log(error);
  }
};

export const getInitiatives = async () => {
  try {
    const res = await fetch(
      `https://zg7l7l8s.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'initiatives'%5D%7Corder(index%20desc)`,
    );
    const data = await res.json();
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

export const getProjects = async () => {
  try {
    const res = await fetch(
      `https://zg7l7l8s.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'project'%5D%7Corder(index%20desc)`,
    );
    const data = await res.json();
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

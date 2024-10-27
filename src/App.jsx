import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_PROJECT_ID);

const databases = new Databases(client);


export async function Input(name,message){
  const r= await databases.createDocument(
    import.meta.env.VITE_DATABASE_ID,
     import.meta.env.VITE_COLLECTION_ID,
      ID.unique(),
      {Name:name,Message:message}
  );
  if(r) return r;
  return false
}

export async function GetDocument(DocID){
  return await databases.getDocument(
    import.meta.env.VITE_DATABASE_ID,
    import.meta.env.VITE_COLLECTION_ID,
    DocID, // documentId
     
  );

  return false
}







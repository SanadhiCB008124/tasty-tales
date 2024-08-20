// src/app/services/recipe.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesCollection = collection(this.firestore, 'recipes');

  constructor(private firestore: Firestore, private storage: Storage) { }

  async addRecipe(recipe: any, imageFile: File) {
    try {
      // Upload image
      const imagePath = `recipes/${uuidv4()}_${imageFile.name}`;
      const imageRef = ref(this.storage, imagePath);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // Add recipe to Firestore
      await addDoc(this.recipesCollection, {
        ...recipe,
        imageUrl,
        dateCreated: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  }

  async getRecipes() {
    try {
      const q = query(this.recipesCollection);
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting recipes: ', error);
      return [];
    }
  }

  async updateRecipe(id: string, updates: any) {
    try {
      const recipeDoc = doc(this.firestore, `recipes/${id}`);
      await updateDoc(recipeDoc, updates);
    } catch (error) {
      console.error('Error updating recipe: ', error);
    }
  }

  async deleteRecipe(id: string) {
    try {
      const recipeDoc = doc(this.firestore, `recipes/${id}`);
      await deleteDoc(recipeDoc);
    } catch (error) {
      console.error('Error deleting recipe: ', error);
    }
  }
}

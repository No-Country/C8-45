import algoliasearch from "algoliasearch";

import AppDataSource from "../../database/datasource";
import { CompanyService } from "../../modules/company/company.service";
import { Company } from "../../modules/company/entities/company";
import { ErrorService } from "../error/errorModel";

export class Algolia {
  static instance = algoliasearch(
    process.env.ALGOLIAID as string,
    process.env.ALGOLIAKEY as string
  );
  static index = Algolia.instance.initIndex("companiesSearch");

  static formatCompany(company: Partial<Company>) {
    return {
      objectID: company.id,
      website: company.website,
      name: company.name,
    };
  }
  static async createCompany(company: Partial<Company>) {
    try {
      return await Algolia.index.saveObject(Algolia.formatCompany(company));
    } catch (error) {
      throw new ErrorService(400, "No se pudo crear el objeto en algolia");
    }
  }
  static async updateCompany(company: Partial<Company>) {
    try {
      return await Algolia.index.partialUpdateObject(
        Algolia.formatCompany(company)
      );
    } catch (error) {
      console.log(error);
      throw new ErrorService(400, "No se pudo actualizar el objeto en algolia");
    }
  }
  static async deleteCompany(company: Partial<Company>) {
    try {
      const { password, review, ...data } = company;
      return await Algolia.index.delete(Algolia.formatCompany(company));
    } catch (error) {
      throw new ErrorService(400, "No se pudo eliminar el objeto en algolia");
    }
  }
}

/* (
    
    async ()=>{
        await AppDataSource.initialize()
    const data=await new CompanyService().findAll()
    try {
        await Algolia.index.saveObjects(data.map((x)=>Algolia.formatCompany(x)))
        
    } catch (error) {
    console.log(error);
            
    }
    }
)() */

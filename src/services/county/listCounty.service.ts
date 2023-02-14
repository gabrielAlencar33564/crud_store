import AppDataSource from "../../data-source";
import County from "../../entities/counties.entitie";
import ibgeApi from "../../helpers/ibge.api";
import AppError from "../../errors/appError";
import { ICounty } from "../../interfaces/county";

const listCountyService = async (data: string): Promise<ICounty> => {
  const name = data.replace(/_/g, " ").replace(/-/g, " ");

  const countyRepository = AppDataSource.getRepository(County);

  const county = await countyRepository.findOneBy({ nome: name });

  if (!county) {
    try {
      const { data } = await ibgeApi.get("");

      const { id, nome } = data.find((county: ICounty) => {
        return county.nome === name;
      });

      const newCounty = countyRepository.create({ id: id, nome: nome });
      await countyRepository.save(newCounty);

      return newCounty;
    } catch (error) {
      throw new AppError("Internal server error", 500);
    }
  }

  return county;
};

export default listCountyService;

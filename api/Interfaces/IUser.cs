﻿using api.Models;

namespace api.Interfaces
{
    public interface IUser
    {
        UserModel upsert(UserModel model);
        UserModel findById(string idType, string idNumber);
        UserModel findByVehicleId(string vehicleId);
        List<UserModel> findAllActives();
        List<UserModel> findAllInactives();
    }
}
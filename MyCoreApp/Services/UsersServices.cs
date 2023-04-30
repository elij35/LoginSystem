using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using simplechat.Models;
using Newtonsoft.Json;

namespace simplechat.Services
{
    public class UserServices
    {
        private static List<Users> data = new List<Users>();

        public static void Init()
        {
            string json = File.ReadAllText("wwwroot/data/data.json");
            data = JsonConvert.DeserializeObject<List<Users>>(json);
        }

        public static List<Users> GetData()
        {
            return data;
        }

        public static void PushData(Users users)
        {
            data.Add(users);
            File.WriteAllText("wwwroot/data/data.json", JsonConvert.SerializeObject(data));
        }
    }
}

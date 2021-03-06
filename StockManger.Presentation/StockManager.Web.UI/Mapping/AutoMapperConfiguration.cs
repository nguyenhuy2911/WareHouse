﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StockManager.Web.UI.Mapping
{
    public static class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(x =>
            {
                x.AddProfile<ServiceToWebMappingProfile>();
            });
        }
    }
}
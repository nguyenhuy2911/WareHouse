﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using AutoMapper.Configuration;
using StockManager.Entity;
using StockManager.Entity.Web.Mapper;

namespace StockManager.Web.Mapping
{
    public class ServiceToWebMappingProfile : Profile
    {
        public override string ProfileName
        {
            get
            {
                return "WebToServiceMappingProfile";
            }
        }

        public ServiceToWebMappingProfile()
        {
            CreateMap<ResponseBase<List<PRODUCT>>, ResponseBase<List<GetProducts_DataMaper>>>();
            CreateMap<PRODUCT, GetProducts_DataMaper>();
        }
    }
}
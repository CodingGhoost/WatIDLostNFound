package com.LostAndFound.premier.bean.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("card")
public class Card {
  @TableId
  String idNumber;
  String name;
  String location;
  String contact;
  String notes;


}

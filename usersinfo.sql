-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2021 at 08:58 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usersinfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(400) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobileNumber` bigint(10) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `salt` varchar(500) NOT NULL,
  `title` enum('Mr','Ms','Mrs') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `mobileNumber`, `isActive`, `salt`, `title`) VALUES
(1, 'Sidharth', 'Choudhary', 'dfbhdbsh@gmail.com', 'ishugudda', 8448605993, 1, 'jfjbjfkejebfjb', 'Ms'),
(2, 'Poonam', 'SIngh', 'choudharysidharth082000@gmail.com', 'ishugudda123', 9711599446, 2, 'fejjkgjbfjkgvgjkfbjk', 'Mr'),
(3, 'Sidharth', 'Choudhary', 'dfbhdbsh@gmail.com', 'ishugudda', 8448605993, 1, 'jfjbjfkejebfjb', 'Ms'),
(4, 'Poonam', 'SIngh', 'choudharysidharth082000@gmail.com', 'ishugudda123', 9711599446, 2, 'fejjkgjbfjkgvgjkfbjk', 'Mr');

-- --------------------------------------------------------

--
-- Table structure for table `usersvalues`
--

CREATE TABLE `usersvalues` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobileNumber` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usersvalues`
--

INSERT INTO `usersvalues` (`id`, `firstName`, `lastName`, `email`, `mobileNumber`, `password`, `salt`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Sidharth', 'CHoudhary', 'jdvjkbhjv@gmail.com', '9711599446', 'ishugudda', 'jcfjdbchj', 1, '2021-09-14 17:49:43', '2021-09-14 17:49:43'),
(2, 'Sidharth', 'Choudhary', 'test@gmail.com', '8448605993', 'ishugudda', 'jhfkjbdfjgbjk', 1, '2021-09-14 17:14:02', '2021-09-14 17:14:02'),
(3, 'Anushka', 'Singfh', 'chobdfbjk@gmail.com', '8448605993', '$2b$12$Xbeot1eEqBzF2vzsoFSpi.37uag9eLr5obzM765IEm4To3A.h3Z5a', '$2b$12$Xbeot1eEqBzF2vzsoFSpi.', NULL, '2021-09-14 17:58:48', '2021-09-14 17:58:48'),
(4, 'Anushka', 'Singfh', 'chobdfbjk@gmail.com', '8448605993', '$2b$12$uQgrRVsPhq3yI96OqlZ.CefQryUQRrGUyuTFroa/m./C6BRA.GF9a', '$2b$12$uQgrRVsPhq3yI96OqlZ.Ce', NULL, '2021-09-14 18:01:06', '2021-09-14 18:01:06'),
(5, 'Anushka', 'Singfh', 'chobdfbjk@gmail.com', '8448605993', '$2b$12$Xfa2abS0rciJ1FYxUQx29OJyyhdsYyBVdL4CZyhRA2BB6xuue6xNO', '$2b$12$Xfa2abS0rciJ1FYxUQx29O', NULL, '2021-09-14 18:02:33', '2021-09-14 18:02:33'),
(6, 'Anushka', 'Singfh', 'chobdfbjk@gmail.com', '8448605993', '$2b$12$gHLVpxvwd8ASVAMV7cppYe.mx8YYEeektZg41RhMnLXEbOg5VPkFm', '$2b$12$gHLVpxvwd8ASVAMV7cppYe', NULL, '2021-09-14 18:20:33', '2021-09-14 18:20:33'),
(7, 'Anushka', 'Singfh', 'chobdfbjk@gmail.com', '8448605993', '$2b$12$pxbvTB9W8mz0cpaX5V9avOyKDda1boozit0JNHnZ738l70bcPFZdK', '$2b$12$pxbvTB9W8mz0cpaX5V9avO', NULL, '2021-09-14 18:38:30', '2021-09-14 18:38:30'),
(8, 'Anushka', 'Singfh', 'chobdfbjk@gmail.com', '8448605993', '$2b$12$n0sjSmTE90cvb3TJCI.nierCvF5V1iZy0tM4EGNO9gUwhGAmvuWcS', '$2b$12$n0sjSmTE90cvb3TJCI.nie', NULL, '2021-09-14 18:42:27', '2021-09-14 18:42:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usersvalues`
--
ALTER TABLE `usersvalues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usersvalues`
--
ALTER TABLE `usersvalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
